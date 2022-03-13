import React from 'react'
import PropTypes from 'prop-types'


//Icon
import searchIcon from '../../images/search-icon.svg'
//Styles
import { Wrapper, Content } from './styles'





export class Search extends React.Component {

    state = {
        value: ''
    }
    timeout = null;



    componentDidUpdate (_prevProps, prevState) {
        if (this.state.value !== prevState.value) {

            const { setSearchTerm } = this.props

            clearTimeout(this.timeout)

            this.timeout = setTimeout(() => {
                const { value } = this.state
                setSearchTerm(value)
            }, 500)
        }
    }




    render () {
        return (
            <Wrapper>
                <Content>
                    <img src={searchIcon} alt="search-icon" />
                    <input
                        type="text"
                        placeholder='Search Movie'
                        value={this.state.value}
                        onChange={e => this.setState(
                            { value: e.target.value }
                        )}
                    />
                </Content>
            </Wrapper>
        )
    }



}


Search.propTypes = {
    callback: PropTypes.func
}

export default Search
