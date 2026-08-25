export const demoUsers = {
  paciente: { email: 'paciente@vidaplus.com', password: '123456', name: 'Marina Costa', role: 'Paciente', initials: 'MC' },
  profissional: { email: 'medico@vidaplus.com', password: '123456', name: 'Dr. Rafael Lima', role: 'Profissional', initials: 'RL' },
  administrador: { email: 'admin@vidaplus.com', password: '123456', name: 'Carla Mendes', role: 'Administrador', initials: 'CM' }
};

export function authenticate(email, password) {
  return Object.values(demoUsers).find(user => user.email.toLowerCase() === email.trim().toLowerCase() && user.password === password) || null;
}

export function validatePatient(data) {
  const errors = {};
  if (!data.name?.trim() || data.name.trim().length < 3) errors.name = 'Informe o nome completo.';
  if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(data.cpf || '')) errors.cpf = 'Use o formato 000.000.000-00.';
  if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(data.phone || '')) errors.phone = 'Use o formato (00) 00000-0000.';
  if (!/^\S+@\S+\.\S+$/.test(data.email || '')) errors.email = 'Informe um e-mail válido.';
  if (!data.birth) errors.birth = 'Informe a data de nascimento.';
  return errors;
}

export function validateAppointment(data) {
  const errors = {};
  if (!data.specialty) errors.specialty = 'Selecione uma especialidade.';
  if (!data.professional) errors.professional = 'Selecione um profissional.';
  if (!data.date) errors.date = 'Selecione uma data.';
  if (!data.time) errors.time = 'Selecione um horário.';
  if (!data.type) errors.type = 'Selecione a modalidade.';
  return errors;
}

export function formatDate(date, options = { day: '2-digit', month: 'short', year: 'numeric' }) {
  return new Intl.DateTimeFormat('pt-BR', options).format(new Date(`${date}T12:00:00`));
}

export function escapeHtml(value = '') {
  return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
}
