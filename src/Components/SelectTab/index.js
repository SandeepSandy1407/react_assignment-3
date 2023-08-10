const SelectTab = props => {
  const {eachItem, selectedTab} = props
  const {tabId, displayText} = eachItem
  const tabSelected = () => {
    selectedTab(tabId)
  }
  return (
    <li>
      <button type="button" onClick={tabSelected}>
        <h1>{displayText}</h1>
      </button>
    </li>
  )
}
export default SelectTab
