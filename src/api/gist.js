import request from '@/utils/request'
import store from '../store/index'

export default{
    list: function(query){
        let githubUsername = store.state.configuration.githubUsername
        return request({
            url: `/users/${githubUsername}/gists?page=${query.page}&per_page=${query.pageSize}`
        })
    }
}