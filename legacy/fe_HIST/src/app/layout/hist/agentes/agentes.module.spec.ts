import { AgentesModule } from './agentes.module';

describe('AgentesModule', () => {
  let agentesModule: AgentesModule;

  beforeEach(() => {
    agentesModule = new AgentesModule();
  });

  it('should create an instance', () => {
    expect(agentesModule).toBeTruthy();
  });
});
