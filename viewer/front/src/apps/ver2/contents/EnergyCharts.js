import React from 'react'

const EnergyCharts = () => {

  return (
    <div className="analyze-area">
      <div>
        <p className="step1-text">1. 期間を選択してください。</p>
        <p>年</p>
        <p>月</p>
        <p>日</p>
        <p>1時間</p>
      </div>
      <div>
        <p>2. 電力事業者を選択してください。</p>
      </div>
      <div>
        <p>3. 調べたい発電の種類を選択してください。</p>
      </div>
    </div>
  )
}

export default EnergyCharts