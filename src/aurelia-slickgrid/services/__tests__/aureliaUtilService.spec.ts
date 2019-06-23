import { AureliaUtilService } from '..';
import { BindingLanguage, Container, ViewCompiler, ViewResources } from 'aurelia-framework';

const DOM_ELEMENT_ID = 'row-detail123';
jest.mock('flatpickr', () => { });

describe('aureliaUtilService', () => {
  let service: AureliaUtilService;
  let container: Container;
  let viewCompiler: ViewCompiler;
  let viewResources: ViewResources;

  beforeEach(() => {
    // define a <div> container to simulate a row detail DOM element
    const div = document.createElement('div');
    div.innerHTML = `<div id="${DOM_ELEMENT_ID}">some text</div>`;
    document.body.appendChild(div);

    container = new Container({});
    viewResources = new ViewResources();
    viewCompiler = new ViewCompiler(new BindingLanguage(), viewResources);
    service = new AureliaUtilService(container, viewCompiler, viewResources);
  });

  afterEach(() => {
    const domElm = document.getElementById(DOM_ELEMENT_ID);
    domElm.innerHTML = 'some text';
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  describe('createAureliaViewModelAddToSlot method', () => {
    it('should return null when html dom element is not provided', () => {
      const mockCompilerCreate = { bind: jest.fn(), appendNodesTo: jest.fn() };
      // @ts-ignore
      const spyCompiler = jest.spyOn(viewCompiler, 'compile').mockReturnValue({ create: () => mockCompilerCreate });

      const output = service.createAureliaViewModelAddToSlot('./template/path', { firstName: 'John' }, undefined);

      expect(output).toBeNull();
    });

    it('should create an Aurelia ViewModel and add it to a View Slot', () => {
      const domElm = document.getElementById(DOM_ELEMENT_ID);
      const mockCompilerCreate = { bind: jest.fn(), appendNodesTo: jest.fn() };
      // @ts-ignore
      const spyCompiler = jest.spyOn(viewCompiler, 'compile').mockReturnValue({ create: () => mockCompilerCreate });
      const spyView = jest.spyOn(mockCompilerCreate, 'bind').mockReturnValue({ create: jest.fn() });

      const output = service.createAureliaViewModelAddToSlot('./template/path', { firstName: 'John' }, domElm, true);

      expect(spyCompiler).toHaveBeenCalled();
      expect(spyView).toHaveBeenCalled();
      expect(domElm.innerHTML).toBe('');
      expect(output).toEqual({ view: mockCompilerCreate, viewSlot: expect.anything() });
    });
  });

  describe('createAureliaViewAddToSlot method', () => {
    it('should return null when html dom element is not provided', () => {
      const mockCompilerCreate = { bind: jest.fn(), appendNodesTo: jest.fn() };
      // @ts-ignore
      const spyCompiler = jest.spyOn(viewCompiler, 'compile').mockReturnValue({ create: () => mockCompilerCreate });

      const output = service.createAureliaViewAddToSlot('./template/path', undefined);

      expect(output).toBeNull();
    });

    it('should create an Aurelia ViewModel and add it to a View Slot', () => {
      const domElm = document.getElementById(DOM_ELEMENT_ID);
      const mockCompilerCreate = { bind: jest.fn(), appendNodesTo: jest.fn() };
      // @ts-ignore
      const spyCompiler = jest.spyOn(viewCompiler, 'compile').mockReturnValue({ create: () => mockCompilerCreate });
      const spyView = jest.spyOn(mockCompilerCreate, 'bind').mockReturnValue({ create: jest.fn() });

      const output = service.createAureliaViewAddToSlot('./template/path', domElm, true);

      expect(spyCompiler).toHaveBeenCalled();
      expect(spyView).toHaveBeenCalled();
      expect(domElm.innerHTML).toBe('');
      expect(output).toEqual({ view: mockCompilerCreate, viewSlot: expect.anything() });
    });
  });
});
