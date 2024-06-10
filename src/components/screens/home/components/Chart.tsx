import { FC, useEffect, useRef, useState } from 'react'

import photo from '@/assets/photo.png'

const data = [
	{ value: 10, label: 'Деньги' },
	{ value: 10, label: 'Творчество' },
	{ value: 10, label: 'Дружба' },
	{ value: 10, label: 'Развитие' },
	{ value: 10, label: 'Здоровье' },
	{ value: 10, label: 'Любовь' }
]

// первые три цвета подсегментов, последний - цвет надписи
const subSegmentColors = [
	['#47b28f', '#47b28f', '#47b28f', '#FFFFFF'],
	['#d5d6e7', '#d5d6e7', '#d5d6e7', '#212645'],
	['#a2c4c8', '#a2c4c8', '#a2c4c8', '#FFFFFF'],
	['#a2c4c8', '#a2c4c8', '#d5d6e7', '#212645'],
	['#a2c4c8', '#a2c4c8', '#47b28f', '#FFFFFF'],
	['#d5d6e7', '#d5d6e7', '#d5d6e7', '#212645']
]

const Chart: FC = () => {
	const [loading, setLoading] = useState(true)

	window.onload = () => {
		setLoading(false)
	}

	const imageSize = 135
	const size = 300
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas?.getContext('2d')

		if (!ctx) return

		const centerX = size / 2
		const centerY = size / 2
		const radius = (size / 2) * 0.95
		const imageRadius = imageSize / 2
		const lineWidth = 5

		// Устанавливаем цвет фона
		ctx.fillStyle = 'rgba(0,0,0,0)'
		ctx.fillRect(0, 0, size, size)

		const img = new Image()
		img.src = photo
		img.onload = () => {
			ctx.save()
			ctx.beginPath()
			ctx.arc(centerX, centerY, imageRadius, 0, 2 * Math.PI)
			ctx.closePath()
			ctx.clip()
			ctx.drawImage(
				img,
				centerX - imageRadius,
				centerY - imageRadius,
				imageSize,
				imageSize
			)
			ctx.restore()
		}

		let startAngle = 0
		const total = data.reduce((sum, item) => sum + item.value, 0)

		for (let i = 0; i < data.length; i++) {
			const { value, label } = data[i]
			const sliceAngle = (value / total) * 2 * Math.PI

			const subSegmentHeight = radius * 0.15 // Увеличиваем высоту подсегментов
			let subStartRadius = radius
			for (let j = 2; j >= 0; j--) {
				ctx.beginPath()
				ctx.arc(
					centerX,
					centerY,
					subStartRadius,
					startAngle,
					startAngle + sliceAngle,
					false
				)
				ctx.arc(
					centerX,
					centerY,
					subStartRadius - subSegmentHeight,
					startAngle + sliceAngle,
					startAngle,
					true
				)
				ctx.closePath()
				ctx.fillStyle = subSegmentColors[i][j]
				ctx.fill() // Добавляем круги между подсегментами
				subStartRadius -= subSegmentHeight + 3
			}

			// Добавляем круг вокруг фотографии
			ctx.save()
			ctx.beginPath()
			ctx.arc(centerX, centerY, imageRadius + 1, 0, 2 * Math.PI)
			ctx.fillStyle = '#c9cbde'
			ctx.fill()
			ctx.restore()

			const textRadius = radius - subSegmentHeight * 0.5 // Смещаем радиус текста для лучшего отображения
			const textWidth = subSegmentHeight / 0.25 // Задаем ширину текста
			const text = label.split('')
			const angleStep = sliceAngle / label.length / 1.5

			const startTextAngle =
				startAngle + (sliceAngle - textWidth / textRadius) / 2 // Центральное положение текста

			ctx.font = 'bold 14px "Golos Text"'
			ctx.fillStyle = subSegmentColors[i][3]
			ctx.textAlign = 'center'
			ctx.textBaseline = 'middle'

			text.forEach((char, index) => {
				//const charAngle = startAngle + angleStep * index + angleStep / 2;
				const charAngle = startTextAngle + angleStep * index
				const charX = centerX + Math.cos(charAngle) * textRadius
				const charY = centerY + Math.sin(charAngle) * textRadius

				ctx.save()
				ctx.translate(charX, charY)
				ctx.rotate(charAngle + Math.PI / 2)
				ctx.textAlign = 'center'
				ctx.textBaseline = 'middle'
				//ctx.font = 'bold 17px Golos';
				//ctx.fillStyle = 'white';
				ctx.fillText(char, 0, 0)
				ctx.restore()
			})

			ctx.lineWidth = lineWidth

			ctx.beginPath()
			const endX = centerX + radius * Math.cos(startAngle + sliceAngle)
			const endY = centerY + radius * Math.sin(startAngle + sliceAngle)
			ctx.moveTo(centerX, centerY)
			ctx.lineTo(endX, endY)
			ctx.lineWidth = lineWidth * 0.8
			ctx.strokeStyle = '#c8cade'
			ctx.stroke()

			startAngle += sliceAngle
		}

		/*ctx.save()
		ctx.shadowColor = 'rgba(0,0,0,0.1)' // Цвет тени #c9cbde
		ctx.shadowBlur = 30 // Размытие тени
		ctx.shadowOffsetX = 0 // Смещение тени по X
		ctx.shadowOffsetY = 0 // Смещение тени по Y
		ctx.beginPath()
		ctx.arc(centerX, centerY, radius + lineWidth / 2, 0, 2 * Math.PI)
		ctx.strokeStyle = '#bfc2d7'
		ctx.lineWidth = lineWidth
		ctx.stroke()
		ctx.restore()*/
	}, [data, subSegmentColors, size, imageSize, loading])

	return <canvas className='' ref={canvasRef} width={size} height={size} />
}

export default Chart
