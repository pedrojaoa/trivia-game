import { screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import renderWithRouterAndRedux from "../tests/helpers/renderWithRouterAndRedux";

describe('Testes de verificação do Header', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue(),
        });
      });
    
      afterEach(() => {
        jest.clearAllMocks();
      });
      it('', () => {

      });
});
