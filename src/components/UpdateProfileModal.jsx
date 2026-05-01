"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { FaEdit, FaUser } from "react-icons/fa";

export function UpdateProfileModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const name = e.target.name.value;
    const image = e.target.image.value;
    try {
      await authClient.updateUser({
        name,
        image,
      });
      setIsOpen(false);
    } catch (error) {
      alert("Update failed" + error.message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button variant="secondary" onPress={() => setIsOpen(true)}>
        <FaEdit /> Update Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    isRequired
                    className="w-full"
                    name="name"
                    type="text"
                  >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                  </TextField>
                  <TextField
                    isRequired
                    className="w-full"
                    name="image"
                    type="url"
                  >
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your Image URL" />
                    <FieldError />
                  </TextField>
                  <Modal.Footer>
                    <Button
                      slot="close"
                      variant="secondary"
                      isDisabled={isPending}
                    >
                      Cancel
                    </Button>
                    <Button isLoading={isPending} type="submit">
                      {isPending ? "Saving..." : "Save"}
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
