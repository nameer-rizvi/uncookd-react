import React from "react";
import useWritePageSidebar from "./WritePageSidebar";
import useWritePageNav from "./WritePageNav";
import useWritePageScroll from "./WritePageScroll";
import WriteSchema from "./WriteSchema";
import WriteFormGeneratorStyled from "./WriteFormGeneratorStyled";
import Page from "../Page";

function Write({ data = {}, page }) {
  const hasDrafts = Boolean(data.drafts && data.drafts.length);

  const Sidebar = useWritePageSidebar({ page, hasDrafts });

  useWritePageNav({ hasDrafts, Sidebar, page });

  useWritePageScroll({ page });

  const schema = WriteSchema({ page, ...data });

  return <WriteFormGeneratorStyled {...{ ...data.formProps, ...schema }} />;
}

const PageWrite = (props) => <Page Component={Write} {...props} />;

export default PageWrite;
