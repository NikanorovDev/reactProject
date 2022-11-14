import { render } from "@testing-library/react"
import { Home } from "../pages/Home"
import { Gists } from "../pages/Gists"
import { formatTimeStrings } from "../utils/formatTimeString"

describe('formatTimeString', () => {

    it('returned None if no opening hours passed', () => {
        const expected = 'None'
        const received = formatTimeStrings([])

        expect(received).toEqual(expected)
    })

    it("returned 'start till tomorrow' if only one opening hour passed", () => {

        const openingOurs = ['12-00']
        const expected = `${openingOurs[0]} - Till tomorrow`
        const received = formatTimeStrings(openingOurs)

        expect(expected).toEqual(received)
    })

    it("returns 'start - end' if more than one opening hours passed", () => {

        const openingHours = ["12-00", "16-00", "18-00"];
        const expected = `${openingHours[0]} - ${openingHours[2]}`;
        const received = formatTimeStrings(openingHours);

        expect(received).toEqual(expected);

    })
})


describe('test component', () => {
    it('snapshot test with component Home', () => {
        const utils = render(<Home />)
        expect(utils).toMatchSnapshot()
    })

    it('matches snapshot Gists', () => {
        const utils = render(<Gists />)

        expect(utils).toMatchSnapshot();
    });
})







