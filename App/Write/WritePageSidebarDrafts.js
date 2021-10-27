import React, { Fragment } from "react";
import { useRequestState } from "../../hooks";
import { draftGet, draftDelete } from "../../redux";
import { useSelector } from "react-redux";
import { parseErrorString } from "../../utils";
import {
  ItalicP2,
  ItalicP1,
  DraftLimitContainer,
  DraftGetStatus,
} from "./WritePageSidebarDraftsStyled";
import ArticleList from "../ArticleList";
import { Button, Small } from "../Element";

function WritePageSidebarDrafts({ page }) {
  const resetPageNumber = () => page.setNumber(0);

  function resetPage() {
    resetPageNumber();
    page.setSidebar();
  }

  const requestState = useRequestState();

  const { drafts, limit } = useSelector((state) => state.componentData.write);

  drafts.sort((a, b) => new Date(b.last_saved_at) - new Date(a.last_saved_at));

  const API = {
    GET: (response) => draftGet({ ...response, resetPage, requestState }),
    DELETE: (response) => draftDelete({ ...response, resetPageNumber }),
  };

  const ArticleListProps = {
    rows: drafts,
    svg: null,
    isDraft: true,
    mainButton: { action: "write", onClick: API.GET },
    onDelete: API.DELETE,
  };

  const disableCreateButton = drafts.length >= limit.number;

  const CreateButtonProps = {
    title: "Write a new story.",
    name: "write_new",
    onClick: API.GET,
    disabled: disableCreateButton,
    $square: true,
  };

  const DraftStatusMessage = requestState.pending
    ? "loading draft, please wait..."
    : requestState.error
    ? parseErrorString(requestState.error)
    : null;

  return (
    <Fragment>
      <ItalicP2>continue working on...</ItalicP2>
      <ArticleList {...ArticleListProps} />
      <ItalicP1>or</ItalicP1>
      <Button {...CreateButtonProps}>start new draft</Button>
      <DraftLimitContainer>
        <Small>
          {drafts.length}/{limit.number} drafts in-progress.
        </Small>
        {disableCreateButton ? (
          <Small>{limit.validation} start a new one.</Small>
        ) : null}
      </DraftLimitContainer>
      {DraftStatusMessage ? (
        <DraftGetStatus>{DraftStatusMessage}</DraftGetStatus>
      ) : null}
    </Fragment>
  );
}

export default WritePageSidebarDrafts;
