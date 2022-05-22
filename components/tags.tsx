import React from 'react';
import StyleTwoToneIcon from '@mui/icons-material/StyleTwoTone';

export type TagsType = {
  name: string;
};

export type TagsProps = {
  title?: string;
  tags: TagsType[];
};

export default function Tags(props: TagsProps) {
  const { title, tags } = props;
  return (
    <div>
      {title ? (
        <h3 className=" bg-black text-white text-base m-2 sm:text-xl">
          {title}
        </h3>
      ) : null}
      <div id="categoryContainer" className="mx-2 flex sm:flex-1">
        <ul className="text-xs list-none list-outside flex flex-wrap sm:text-base">
          {tags.map((tag, index) => {
            return (
              <li className=" mx-1" key={index}>
                <div>
                  <StyleTwoToneIcon fontSize="small" />
                  <span>{tag.name}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
