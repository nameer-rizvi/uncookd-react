import React from "react";
import { useToggle, useRequestState } from "../../hooks";
import { FlexBox, P } from "../Element";
import SettingsAccountDeleteToggleWarning from "./SettingsAccountDeleteToggleWarning";
import SettingsAccountDeletePending from "./SettingsAccountDeletePending";
import SettingsAccountDeleteWarning from "./SettingsAccountDeleteWarning";

function SettingsAccountDelete() {
  const toggle = useToggle();

  const { pending, setPending, error, setError } = useRequestState();

  // No request canceling middleware integration because if the request
  // is successful, it means the user has been deleted, and the response
  // should be handled regardless of the users next actions.

  return (
    <FlexBox>
      <P>Permanently delete your account... and lose EVERYTHING... FOREVER!</P>
      <SettingsAccountDeleteToggleWarning
        toggleWarning={() => !pending && toggle.change()}
        $showWarning={toggle.state}
        pending={pending}
      />
      {toggle.state ? (
        pending ? (
          <SettingsAccountDeletePending />
        ) : (
          <SettingsAccountDeleteWarning
            pending={pending}
            setPending={setPending}
            error={error}
            setError={setError}
          />
        )
      ) : null}
    </FlexBox>
  );
}

export default SettingsAccountDelete;
