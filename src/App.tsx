import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { useTelegram } from '@/hooks'
import Navigation from '@/navigation/Navigation'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

function App() {
	const { tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [])

	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Navigation />
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
