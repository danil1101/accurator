import { FC } from 'react'

import icon from '@/assets/icons/share.svg'

interface IProps {
	onClick: () => void
}

const Share: FC<IProps> = ({ onClick }) => {
	return (
		<button
			onClick={onClick}
			className='py-base-x1 opacity-50 items-center rounded-base-x2 px-base-x2 flex gap-base-x1 border border-dark ml-auto'
		>
			<img src={icon} alt='' />
			<span>Поделиться</span>
		</button>
	)
}

export default Share
