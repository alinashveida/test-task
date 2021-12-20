import styled from './RoundedButton.module.scss'

export default function RoundedButton({ icon, onClick }) {
  const Icon = icon
  return (
    <button className={styled.button} onClick={onClick}>
      <Icon className={styled.icon} />
    </button>
  )
}
