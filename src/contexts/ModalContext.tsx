import {
	createContext,
	useState,
	useContext,
	ReactNode,
} from 'react';

interface ModalContextData {
	showModal: boolean;
	showComponent: string;
	toggleModal: (component?: any) => void;
};

interface ModalProviderProps {
	children: ReactNode;
};

export const ModalContext = createContext({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
	const [showModal, setShowModal] = useState(false);
	const [showComponent, setShowComponent] = useState('');

	function toggleModal(component?: any) {
		if (component) {
			setShowComponent(component);
		}

		setShowModal(oldStatus => !oldStatus);
	}

	return (
		<ModalContext.Provider value={{ showModal, showComponent, toggleModal }}>
			{ children }
		</ModalContext.Provider>
	)
}

export const useModalContext = () => useContext(ModalContext);
