import test from 'node:test';
import assert from 'node:assert/strict';
import { authenticate, validatePatient, validateAppointment, escapeHtml } from '../core.js';

test('autentica um usuário de demonstração válido', () => {
  assert.equal(authenticate('paciente@vidaplus.com', '123456')?.role, 'Paciente');
});

test('rejeita credenciais inválidas', () => {
  assert.equal(authenticate('paciente@vidaplus.com', 'senha-errada'), null);
});

test('valida os campos obrigatórios do paciente', () => {
  const errors = validatePatient({ name:'A', cpf:'123', phone:'999', email:'invalido', birth:'' });
  assert.deepEqual(Object.keys(errors).sort(), ['birth','cpf','email','name','phone']);
});

test('aceita cadastro de paciente bem formatado', () => {
  assert.deepEqual(validatePatient({ name:'Maria Silva', cpf:'123.456.789-00', phone:'(41) 99999-9999', email:'maria@email.com', birth:'1990-05-10' }), {});
});

test('valida agendamento incompleto', () => {
  assert.equal(Object.keys(validateAppointment({})).length, 5);
});

test('escapa conteúdo informado pelo usuário', () => {
  assert.equal(escapeHtml('<script>'), '&lt;script&gt;');
});
