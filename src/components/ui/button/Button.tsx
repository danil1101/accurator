import { FC, PropsWithChildren } from 'react'

import Typography from '../typography/Typography'

import { IButton } from './button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({ children, ...props }) => {
	return (
		<button
			className='py-base-x3 flex justify-center items-center bg-white rounded-base-x1 w-full shadow-base-x1'
			{...props}
		>
			<Typography variant='button' color='dark' className='leading-none'>
				{children}
			</Typography>
		</button>
	)
}

export default Button
