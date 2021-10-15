import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URLQuery, request } from "../../utils";
import { isStringValid } from "simpul";
import { useRequestState } from "../../hooks";
import { userUpdate } from "../../redux";
import AccountVerifyStyled from "./AccountVerifyStyled";
import { GrayBox, H4, P } from "../Element";
import AccountVerifyError from "./AccountVerifyError";
import AccountVerifySuccess from "./AccountVerifySuccess";
import NotFound from "../NotFound";

function AccountVerify() {
  const dispatch = useDispatch();

  const { is_verified, isLoggedIn } = useSelector((state) => state.user);

  const token = URLQuery.get("token");

  const tokenExists = isStringValid(token);

  const requestCondition = !is_verified && tokenExists;

  const requestState = useRequestState({ initialPending: requestCondition });

  useEffect(() => {
    request({
      allowAnonymousRequest: true,
      method: "POST",
      url: "/user/account/verify/token",
      data: { token },
      onSuccess: (responseData) => dispatch(userUpdate(responseData)),
      requestCondition,
      ...requestState,
    });
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  return tokenExists ? (
    <AccountVerifyStyled>
      <GrayBox>
        <H4>Account Verification</H4>
        {requestState.pending ? (
          <P>Verifying...</P>
        ) : requestState.error ? (
          <AccountVerifyError
            error={requestState.error}
            isLoggedIn={isLoggedIn}
          />
        ) : is_verified ? (
          <AccountVerifySuccess isLoggedIn={isLoggedIn} />
        ) : (
          ""
        )}
      </GrayBox>
    </AccountVerifyStyled>
  ) : (
    <NotFound />
  );
}

export default AccountVerify;
