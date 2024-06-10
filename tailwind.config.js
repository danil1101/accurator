/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
export default {
	darkMode: 'class',
	content: ['./src.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			green: '#47B28F',
			white: '#fff',
			dark: '#212645'
		},
		extend: {
			boxShadow: {
				'base-x1':
					'0 0 1px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(55, 63, 115, 0.12), 0 10px 20px 0 rgba(55, 63, 115, 0.18)'
			},
			spacing: {
				'base-x1': '6px',
				'base-x2': '10px',
				'base-x3': '18px',
				'base-x4': '20px',
				'base-x5': '30px',
				'base-x6': '50px'
			},
			borderRadius: {
				'base-x1': '6px',
				'base-x2': '16px'
			},
			fontSize: {
				'base-x1': '12px',
				'base-x2': '14px',
				'base-x3': '18px',
				'base-x4': '24px',
				'base-x5': '32px',
				'base-x6': '36px'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0, transform: 'scale(0.95)' },
					'100%': { opacity: 1, transform: 'scale(1)' }
				},
				fadeOut: {
					'0%': { opacity: 1, transform: 'scale(1)' },
					'100%': { opacity: 0, transform: 'scale(0.95)' }
				}
			},
			animation: {
				fadeIn: 'fadeIn 0.3s ease-out forwards',
				fadeOut: 'fadeOut 0.3s ease-in forwards'
			}
		}
	}
}
