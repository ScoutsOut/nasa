import { colors } from '@styles/design-tokens'

export const InstagramIcon = ({ fillColor, size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5833 5.4165H14.5916M5.83329 1.6665H14.1666C16.4678 1.6665 18.3333 3.53198 18.3333 5.83317V14.1665C18.3333 16.4677 16.4678 18.3332 14.1666 18.3332H5.83329C3.53211 18.3332 1.66663 16.4677 1.66663 14.1665V5.83317C1.66663 3.53198 3.53211 1.6665 5.83329 1.6665ZM13.3333 9.47484C13.4361 10.1684 13.3177 10.8767 12.9948 11.499C12.6718 12.1213 12.1609 12.626 11.5346 12.9412C10.9084 13.2565 10.1987 13.3662 9.50645 13.2548C8.81423 13.1434 8.17476 12.8166 7.67899 12.3208C7.18322 11.825 6.8564 11.1856 6.74502 10.4933C6.63363 9.80113 6.74335 9.09142 7.05856 8.46515C7.37378 7.83888 7.87845 7.32795 8.50078 7.00504C9.12311 6.68212 9.83142 6.56366 10.525 6.6665C11.2324 6.77141 11.8873 7.10106 12.393 7.60676C12.8987 8.11246 13.2284 8.7674 13.3333 9.47484Z"
        stroke={fillColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
