import React, { useEffect, useState } from "react";

type ProfileStatusType = {
  status: string;
  userId: number | undefined;
  updateStatus: (status: string) => void;
};

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const activateEditMode = () => {
    setEditMode(true);
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setEditMode(!editMode);
      props.updateStatus(status);
    }
  };
  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input
            type="text"
            value={status}
            onBlur={() => {
              deactivateEditMode();
            }}
            autoFocus={true}
            onChange={(e) => {
              onStatusChange(e);
            }}
            onKeyDown={(event) => {
              handleKeyDown(event);
            }}
          />
        </div>
      ) : (
        <div>
          <span
            onDoubleClick={() => {
              activateEditMode();
            }}
          >
            {status || "No status"}{" "}
          </span>
        </div>
      )}
    </div>
  );
};
