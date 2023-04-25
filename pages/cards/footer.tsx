import React, { FC, useState } from "react";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import IProps from "@component/Interfaces/IProps";

const Footer: FC<IProps> = ({ code, claimed, used, shipped }) => {
  const [copied, setCopied] = useState(false);

  if (shipped === true) {
    return null;
  }

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div data-testid="footer-test">
      {copied ? (
        <span
          className="w-16 bg-lime-100 rounded font-semibold text-lime-400 text-xs"
          style={{
            position: "absolute",
            marginTop: "-20px",
            marginRight: "-90px",
            marginLeft: "65px",
          }}
        >
          COPIED
        </span>
      ) : null}
      <div className="pt-2">
        {claimed === true || used === true ? (
          <div className="flex border w-64 rounded p-2 codeText code-button">
            <div className="mr-1 text-[#495967]">
              <QrCode2Icon />
            </div>
            <div className="mr-2 text-[12px] font-bold text-[#495967] mt-1">
              <p>CODE</p>
            </div>
            <input
              className="ml-2 mr-2 truncate font-semibold text-gray-500 bg-transparent"
              disabled
              value={code?.toLocaleUpperCase()}
              onChange={(e) => e.target.value}
            />
            <CopyToClipboard text={code} onCopy={handleCopy}>
              <button data-testid="button" className="text-[#495967]">
                <ContentCopyIcon />
              </button>
            </CopyToClipboard>
          </div>
        ) : (
          <div className="drop-shadow-xl code-button">
            <button className="bg-blue-500 w-56 text-white rounded py-2 font-semibold text-xs">
              ORDER SHIPPING
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
