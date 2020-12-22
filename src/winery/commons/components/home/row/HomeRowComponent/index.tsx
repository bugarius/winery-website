import React, {FC, Ref} from "react";
import {HomeRowColumn} from "./HomeRowColumn";
import {HomeRow} from "./HomeRow";

interface Props
{
    refTarget: Ref<any>;
    leftComponent: any;
    rightComponent: any;
}

export const HomeRowComponent: FC<Props> = ({refTarget, leftComponent, rightComponent}) => {
  return (
      <HomeRow refTarget={refTarget}>
          <HomeRowColumn>
              {leftComponent}
          </HomeRowColumn>
          <HomeRowColumn>
              {rightComponent}
          </HomeRowColumn>
      </HomeRow>
  )
};