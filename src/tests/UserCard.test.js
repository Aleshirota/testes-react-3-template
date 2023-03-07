import { render, screen, waitFor } from "@testing-library/react"
import ProductCard from "../components/ProductCard"
import axios from "axios"

jest.mock("axios")

const axiosResponseMock = {
    data: {
        title: "MacBook Pro",
        description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png"
    }
}

describe("UserCard", () => {
    
    test("renderiza", async () => {
        axios.get.mockResolvedValueOnce(axiosResponseMock)
        render(<ProductCard />)
        screen.debug()
        await waitFor(() => {})
        screen.debug()
    })

})