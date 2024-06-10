import { FC, useEffect, useState } from 'react'

import { Modal } from '@/components/ui'

import IconButtonDownload from '@/assets/icons/download.svg'
import IconFacebook from '@/assets/icons/facebook.svg'
import IconHealth from '@/assets/icons/health.svg'
import IconInstagram from '@/assets/icons/instagram.svg'
import IconTelegram from '@/assets/icons/telegram.svg'
import IconViber from '@/assets/icons/viber.svg'
import IconVk from '@/assets/icons/vk.svg'
import IconWhatsapp from '@/assets/icons/whatsapp.svg'
import ImagePerspective from '@/assets/perspective.svg'

import { Chart, Share } from './components'

const Home: FC = () => {
	const [haveFeedback, setHaveFeedback] = useState(false)
	const [openModalShare, setOpenModalShare] = useState(false)
	const [openModalError, setOpenModalError] = useState(false)
	const [openModalFeedback, setOpenModalFeedback] = useState(false)
	const [openModalBelieve, setOpenModalBelieve] = useState(false)
	const [openModalSubscribe, setOpenModalSubscribe] = useState(false)

	const toggleVisibleModalShare = () => {
		setOpenModalShare(!openModalShare)
	}
	const toggleVisibleModalError = () => {
		setOpenModalError(!openModalError)
	}
	const toggleVisibleModalFeedback = () => {
		setOpenModalFeedback(!openModalFeedback)
	}
	const toggleVisibleModalBelieve = () => {
		setOpenModalBelieve(!openModalBelieve)
	}
	const toggleVisibleModalSubscribe = () => {
		setOpenModalSubscribe(!openModalSubscribe)
	}

	useEffect(() => {
		setTimeout(() => {
			if (!openModalFeedback && !haveFeedback && !openModalShare) {
				toggleVisibleModalFeedback()
				setHaveFeedback(true)
			}
		}, 5000)
	}, [])

	const emoji = [
		{ code: '&#x1F60D;' },
		{ code: '&#x1F44D;' },
		{ code: '&#x1F4A9;' }
	]

	return (
		<div className='h-full py-base-x4 px-base-x4 flex flex-col'>
			<Share onClick={toggleVisibleModalShare} />
			<div className='flex flex-col gap-base-x4 items-center justify-center flex-1'>
				<p className='text-base-x4'>Твой типаж: Здоровяк</p>
				<Chart />
			</div>
			<div className='relative z-20 bg-white shadow-xl rounded-base-x2 p-base-x4 flex flex-col gap-base-x2'>
				<div className='flex gap-base-x1 items-center'>
					<img src={IconHealth} alt='' />
					<p className='text-base-x4 text-dark'>Здоровье</p>
				</div>
				<p className='text-base-x2 text-dark'>
					Люди от тебя без ума, но обрати внимание на наименее развитые аспекты
					своей личности и бла бла бла
				</p>
			</div>
			<div className='absolute -bottom-base-x2 right-base-x4 left-base-x4 z-10'>
				<img src={ImagePerspective} alt='' className='w-full object-contain' />
			</div>
			<Modal isOpen={openModalShare} handleClose={toggleVisibleModalShare}>
				<div className='flex flex-col'>
					<div className='flex flex-col gap-base-x4 items-center justify-center py-base-x5 px-base-x3 bg-[linear-gradient(127deg,rgba(245,247,250,1),rgba(195,207,226,1))]'>
						<p className='text-base-x4'>Твой типаж: Здоровяк</p>
						<Chart />
					</div>
					<div className='flex flex-col gap-base-x6 py-base-x5 px-base-x4'>
						<p className='text-base-x4 text-center'>Поделись с друзьями</p>
						<div className='flex justify-center gap-base-x5'>
							{[IconFacebook, IconVk, IconInstagram].map(icon => (
								<button
									key={icon}
									onClick={() => {
										toggleVisibleModalShare()
										toggleVisibleModalError()
									}}
								>
									<img src={icon} alt='' />
								</button>
							))}
						</div>
					</div>
				</div>
			</Modal>
			<Modal isOpen={openModalError} handleClose={toggleVisibleModalError}>
				<div className='flex flex-col gap-base-x4 pt-base-x5 pb-base-x2 px-base-x4'>
					<div className='flex flex-col gap-base-x2'>
						<p className='text-dark text-base-x4 text-center'>
							Ой, что-то произошло
						</p>
						<p className='text-dark text-base-x2 text-center'>
							Оставь свой ник в инстаграме и мы пришлем тебе отчёт в директ
						</p>
					</div>

					<div className='flex flex-col gap-base-x4'>
						<input
							type='text'
							placeholder='@твой_ник'
							className='w-full border-b border-b-[rgb(33,38,69)] py-base-x2 text-base-x3 text-dark opacity-25 outline-0 text-center'
						/>

						<button className='flex items-center justify-center py-base-x3 w-full rounded-base-x2 shadow-lg bg-[linear-gradient(135deg,rgba(215,219,236,0.25),rgba(193,194,215,0.25))]'>
							<span className='text-dark text-base-x3 font-bold'>Оставить</span>
						</button>
					</div>

					<button className='flex items-center gap-base-x1 py-base-x3 px-base-x2 mx-auto opacity-50'>
						<img src={IconButtonDownload} alt='' />
						<span className='font-medium text-base-x3 text-dark'>
							Скачать сразу
						</span>
					</button>
				</div>
			</Modal>
			<Modal isOpen={openModalBelieve} handleClose={toggleVisibleModalBelieve}>
				<div className='flex flex-col gap-base-x4 py-base-x5 px-base-x4'>
					<div className='flex flex-col gap-base-x2'>
						<p className='text-dark text-base-x4 text-center'>Не веришь?</p>
						<p className='text-dark text-base-x2 text-center'>
							Оставь свой ник в инстаграме и мы сделаем разбор от которого ты
							обалдеешь
						</p>
					</div>

					<div className='flex flex-col gap-base-x4'>
						<input
							type='text'
							placeholder='@твой_ник'
							className='w-full border-b border-b-[rgb(33,38,69)] py-base-x2 text-base-x3 text-dark opacity-25 outline-0 text-center'
						/>

						<button
							onClick={() => {
								toggleVisibleModalBelieve()
								toggleVisibleModalSubscribe()
							}}
							className='flex items-center justify-center py-base-x3 w-full rounded-base-x2 shadow-lg bg-[linear-gradient(135deg,rgba(215,219,236,0.25),rgba(193,194,215,0.25))]'
						>
							<span className='text-dark text-base-x3 font-bold'>Оставить</span>
						</button>
					</div>
				</div>
			</Modal>
			<Modal
				isOpen={openModalFeedback}
				handleClose={toggleVisibleModalFeedback}
			>
				<div className='flex flex-col gap-base-x6 py-base-x5 px-base-x4'>
					<p className='text-center text-dark text-base-x4'>
						Понравился результат?
					</p>
					<div className='flex justify-center gap-base-x5'>
						{emoji.map(icon => (
							<button
								onClick={() => {
									toggleVisibleModalFeedback()
									toggleVisibleModalBelieve()
								}}
								key={icon.code}
								dangerouslySetInnerHTML={{ __html: icon.code }}
								className='text-base-x4 flex items-center justify-center h-base-x6 w-base-x6 rounded-full border  border-[rgba(89,92,116,0.25)]'
							/>
						))}
					</div>
				</div>
			</Modal>
			<Modal
				isOpen={openModalSubscribe}
				handleClose={toggleVisibleModalSubscribe}
			>
				<div className='flex flex-col gap-base-x4 py-base-x5 px-base-x4'>
					<div className='flex flex-col gap-base-x2 items-center'>
						<p className='text-center text-dark text-base-x4'>Подпишись</p>
						<p className='text-base-x2 text-dark opacity-50 max-w-[220px] text-center'>
							И получи целый месяц рекомендаций в подарок
						</p>
					</div>
					<div className='flex justify-center gap-base-x5'>
						{[IconTelegram, IconWhatsapp, IconViber].map(icon => (
							<button onClick={toggleVisibleModalSubscribe} key={icon}>
								<img src={icon} alt='' />
							</button>
						))}
					</div>
				</div>
			</Modal>
		</div>
	)
}

export default Home
