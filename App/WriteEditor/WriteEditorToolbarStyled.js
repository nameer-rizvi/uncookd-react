import styled from "styled-components";

const WriteEditorToolbarStyled = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  padding: 8px 40px 8px 15px !important;
  align-items: center;
  font-family: inherit !important;
  border: unset !important;
  min-height: ${({ theme }) => theme.height.pageNavMobile};
  background-color: ${({ theme }) => theme.color.light[4]};
  z-index: ${({ theme }) => theme.zIndex.writeToolbar};

  button.toolbar-custom {
    height: unset !important;
    padding: unset !important;
    width: unset !important;
    margin-right: 15px;
  }

  button:hover,
  button:focus {
    color: unset !important;
  }

  .minimized,
  .full {
    display: flex;
    width: 100%;
    &.hide {
      display: none;
    }
  }

  .full {
    align-items: flex-start;
  }

  .full section {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
  }

  .ql-font,
  .ql-size {
    width: 186px !important;
  }

  .ql-picker-options {
    overflow: auto;
    max-height: 200px;
    background-color: ${({ theme }) => theme.color.light[4]} !important;
  }

  .ql-stroke {
    stroke: ${({ theme }) => theme.color.dark[3]} !important;
  }

  section svg,
  .ql-fill {
    fill: ${({ theme }) => theme.color.dark[3]} !important;
  }

  .ql-active,
  .ql-picker,
  .ql-picker-label,
  .ql-picker-label:focus,
  .ql-picker-label:hover,
  .ql-picker-item,
  .ql-picker-item:focus,
  .ql-picker-item:hover,
  .ql-picker-item.ql-selected {
    color: ${({ theme }) => theme.color.dark[3]} !important;
  }

  .ql-picker-label:focus,
  .ql-picker-item:focus {
    outline: ${({ theme }) => theme.border[7]};
  }

  .ql-picker.ql-expanded .ql-picker-label {
    border-color: transparent !important;
  }

  .ql-active {
    border: ${({ theme }) => theme.border[1]} !important;
  }

  .ql-picker-label.ql-active {
    border: unset !important;
  }

  .ql-picker,
  .ql-formats button {
    margin-right: 3px;
    margin-bottom: 5px;
  }
`;

export default WriteEditorToolbarStyled;
