/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import type { User } from "../types";
import { useUserStore } from "../store/userStore";

interface Props {
  user: User;
  open: boolean;
  onClose: () => void;
}

export default function UserEditModal({
  user,
  open,
  onClose,
}: Props) {
  const { updateUser } = useUserStore();

  const [name, setName] = useState(user.name);
  const [status, setStatus] = useState(user.status);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setName(user.name);
      setStatus(user.status);
      setError("");
    }
  }, [open, user]);

  const onSave = () => {
    if (!name.trim()) {
      setError("Name is required");
      return;
    }

    updateUser(user.id, {
      name,
      status,
    });

    onClose();
  };

  return (
    <Modal
      open={open}
      title="Edit User"
      onClose={onClose}
    >
      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            className="w-full rounded border px-3 py-2"
          />
          {error && (
            <p className="mt-1 text-xs text-red-600">
              {error}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Status
          </label>
          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as any)
            }
            className="w-full rounded border px-3 py-2"
          >
            <option value="active">Active</option>
            <option value="inactive">
              Inactive
            </option>
          </select>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button onClick={onSave}>
            Save Changes
          </Button>
        </div>
      </div>
    </Modal>
  );
}
