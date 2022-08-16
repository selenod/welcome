import { ContentType } from '../../data';

import { useState } from 'react';

interface IContentData {
  isSelection?: boolean;
  isScrollable?: boolean;
  width?: number;
  height?: number;
  contents: Array<{
    text?: string;
    id?: number;
    type?: ContentType;
    onClick?: Function;
    selected?: boolean;
  }>;
}

export function PopContent({
  isSelection = false,
  isScrollable = false,
  height = 200,
  width = 190,
  contents,
}: IContentData) {
  const [contentsState, setContentsState] = useState<
    Array<{
      text?: string;
      id?: number;
      type?: ContentType;
      onClick?: Function;
      selected?: boolean;
    }>
  >(contents);

  if (isSelection) {
    return (
      <div
        className="popover-parent"
        style={
          isScrollable
            ? {
                height: height,
                width: width,
              }
            : {
                width: width,
              }
        }
      >
        <div
          className="popover"
          style={
            isScrollable
              ? {
                  height: height,
                }
              : undefined
          }
        >
          {contentsState.map((content) =>
            content.type === 'line' ? (
              <div
                key={contentsState.indexOf(content)}
                className="hl"
                style={{
                  backgroundColor: 'var(--popContentlineColor)',
                  width: 'calc(100% - 20px)',
                  marginLeft: 10,
                }}
              />
            ) : content.type === 'category' ? (
              <p
                key={contentsState.indexOf(content)}
                style={{
                  margin:
                    contentsState.indexOf(content) === 0
                      ? '7px 0 3px 15px'
                      : '10px 0 3px 15px',
                  color: 'var(--shortcutIconColor)',
                  fontSize: '.7rem',
                  fontWeight: 800,
                }}
              >
                {content.text}
              </p>
            ) : (
              <div
                key={contentsState.indexOf(content)}
                title={content.text}
                style={{
                  color:
                    content.type === ContentType.DANGER
                      ? 'var(--red)'
                      : 'var(--textSubBlackColor)',
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof content['onClick'] === 'function') {
                    if (content.onClick !== undefined) {
                      content.onClick!();
                    }
                  }
                  const newSelected = contentsState.find(
                    (arrContent) => arrContent.text === content.text
                  );
                  const oldSelected = contentsState.find(
                    (arrContent) => arrContent.selected
                  );
                  if (
                    newSelected !== oldSelected &&
                    newSelected !== undefined &&
                    oldSelected !== undefined
                  ) {
                    newSelected!.selected = true;
                    oldSelected!.selected = false;
                  }
                  const newArray = contentsState;
                  newArray[contentsState.indexOf(newSelected!)] = newSelected!;
                  newArray[contentsState.indexOf(oldSelected!)] = oldSelected!;
                  setContentsState([...newArray]);
                }}
              >
                <div>
                  {content.selected ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      fill="var(--shortcutIconColor)"
                      className="bi bi-check-lg"
                      viewBox="0 0 16 16"
                      style={{
                        position: 'relative',
                        top: -1,
                      }}
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>
                  ) : null}
                  <p>{content.text}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  } else
    return (
      <div
        className="popover-parent"
        style={
          isScrollable
            ? {
                height: height,
                width: width,
              }
            : {
                width: width,
              }
        }
      >
        <div className="popover">
          {contentsState.map((content) =>
            content.type === 'line' ? (
              <div
                key={contentsState.indexOf(content)}
                className="hl"
                style={{
                  backgroundColor: 'var(--popContentlineColor)',
                  width: 'calc(100% - 20px)',
                  marginLeft: 10,
                }}
              />
            ) : content.type === 'category' ? (
              <p
                key={contentsState.indexOf(content)}
                style={{
                  margin:
                    contentsState.indexOf(content) === 0
                      ? '7px 0 3px 15px'
                      : '10px 0 3px 15px',
                  color: 'var(--shortcutIconColor)',
                  fontSize: '.7rem',
                  fontWeight: 800,
                }}
              >
                {content.text}
              </p>
            ) : (
              <div
                key={contentsState.indexOf(content)}
                title={content.text}
                style={{
                  color:
                    content.type === ContentType.DANGER
                      ? 'var(--red)'
                      : 'var(--textSubBlackColor)',
                }}
                onClick={() => {
                  if (content.onClick !== undefined) {
                    content.onClick!();
                  }
                }}
              >
                <p>{content.text}</p>
              </div>
            )
          )}
        </div>
      </div>
    );
}
