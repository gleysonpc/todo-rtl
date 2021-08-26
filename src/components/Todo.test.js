import { render, waitFor, fireEvent } from '@testing-library/react'
import Todo from './Todo'

describe('Tests for Todo component', () => {
    it('Should add new task when form has been submitted', async () => {
        // render component 
        // get input - done
        // type in the input
        // click on the submit button
        // get table
        // check if task was added in the table

        const { getByTestId, getByText } = render(<Todo />)
        const fieldNode = await waitFor(() => getByTestId('form-field'))
        const newTask = 'testing'

        fireEvent.change(fieldNode, { target: { value: newTask } })
        expect(fieldNode.value).toEqual(newTask)

        const btnNode = await waitFor(() => getByTestId('form-btn'))

        fireEvent.click(btnNode)

        // const tableNode = await waitFor(() => getByTestId('table'))
        // console.log(tableNode.innerHTML)
        const tdNode = await waitFor(() => getByText(newTask))
        expect(tdNode).toBeDefined()


    })
})