import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { useRequestState } from "../../hooks";
import { parseErrorString, request } from "../../utils";
import { userUpdate } from "../../redux";
import { P, Button } from "../Element";

function SettingsAccountVerifyCTA() {
  // State hooks.

  const [success, setSuccess] = useState();

  const dispatch = useDispatch();

  const { pending, setPending, error, setError } = useRequestState();

  // Handlers.

  function CTAOnClickFail(requestError) {
    requestError = parseErrorString(requestError);
    if (requestError && requestError.includes("verified")) {
      dispatch(userUpdate({ is_verified: 1 }));
    } else setSuccess(false);
  }

  const CTAOnClick = () =>
    request({
      requestCondition: !pending && !success,
      method: "GET",
      url: "/user/account/verify/token",
      onSuccess: () => setSuccess(true),
      onFail: CTAOnClickFail,
      setPending,
      setError,
    });

  // Render.

  return (
    <Fragment>
      <P>
        To verify your account you have to receive a verification link in your
        email and click it.
      </P>
      <Button
        disabled={pending || success}
        onClick={CTAOnClick}
        name="email_verification_link"
        title="Send verification link to your email."
        $square
      >
        {pending
          ? "Sending verification link..."
          : success
          ? "Verification link sent. Please check your email."
          : error
          ? "Failed to send verification. Click here to try again."
          : "Click here to receive a verification link in your email."}
      </Button>
    </Fragment>
  );
}

export default SettingsAccountVerifyCTA;
