import { ComponentProps } from 'react'

export type TVariant = 'h1' | 'button' | 'smalltext'

export type TColor = 'white' | 'dark'

export interface ITypography extends ComponentProps<'p'> {
	color?: TColor
	variant: TVariant
}
