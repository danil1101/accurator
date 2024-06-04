import { Navigate, Route, Routes } from 'react-router-dom'

import { routes } from './routes'

const Navigation = () => {
	return (
		<Routes>
			{routes.map(({ path, component: Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path='*' element={<Navigate to='/onboarding' />} />
		</Routes>
	)
}

export default Navigation
