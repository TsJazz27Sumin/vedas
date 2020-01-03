import React from 'react'
import styled from 'styled-components';

const CompanyName = ({ company_name, jurisdiction }) => {

  let CompanyNameArea = styled.div`
  // 文字に関するスタイル
  // 枠線に関するスタイル
  // 背景に関するスタイル
  // 横幅と高さに関するスタイル
  // 余白に関するスタイル
  // ボックスサイズの算出方法を指定
  // テキストに関するスタイル
  // 表示に関するスタイル
  // 位置に関するスタイル
  // 横並び(浮動)に関するスタイル
  // 影に関するスタイル
  
    margin-top: 5%;
  `;

  return (
    <CompanyNameArea>
      {company_name} {jurisdiction} (MWh)
    </CompanyNameArea>
  )
}

export default CompanyName