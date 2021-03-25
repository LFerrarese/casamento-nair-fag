import axios from 'axios';

interface PresenceData {
	email: string;
	name: string;
	invited?: Array<{ name: string; }>;
};

export const api = axios.create({
	baseURL: "http://localhost:3001/api/v1",
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Access-Control-Allow-Origin': '*'
	}
});

function exists(value: any): boolean {
	if (!value) return false;
	if (Array.isArray(value) && value.length === 0) return false;
	if (typeof value === 'string' && !value.trim()) return false;
	return true;
}

export function validateConfirmPresence(presence: PresenceData) {
	if (!exists(presence.email)) return "E-mail não informado";
	if (!exists(presence.name)) return "Nome não informado";
	return "OK";
}

export async function confirmPresence(presence: PresenceData) {
	const response = await api.post('/people/save', presence);

	return response;
}
