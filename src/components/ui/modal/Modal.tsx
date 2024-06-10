import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

import IconClose from '@/assets/icons/close.svg'

import { IModal } from './modal.interface'

const Modal: FC<PropsWithChildren<IModal>> = ({
	isOpen,
	handleClose,
	children
}) => {
	return (
		<>
			{isOpen && (
				<>
					<div className='bg-[rgba(214,218,235,0.7)] blur-[20px] absolute top-0 bottom-0 right-0 left-0 z-30'></div>

					<div
						className={cn(
							'absolute inset-0 pb-base-x5 flex items-end justify-center z-50',
							isOpen ? 'animate-fadeIn' : 'animate-fadeOut'
						)}
					>
						<button
							className='absolute top-base-x4 text-gray-700 hover:text-gray-900'
							onClick={handleClose}
						>
							<img src={IconClose} alt='' />
						</button>
						<div className='bg-white rounded-base-x2 overflow-hidden shadow-lg w-[335px] transform transition-transform duration-300'>
							{children}
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default Modal
