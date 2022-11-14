import { render } from "@testing-library/react"
import ForTest from "./ForTest"

describe('we wanna test component', () => {
    it('we wanna compare snapshots', () => {
        const utils = render(<ForTest />);

        expect(utils).toMatchSnapshot();
    });
})

