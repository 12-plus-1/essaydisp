const paginate = (data) => {
    const itemPerPage = 10;
    const pageNum = Math.ceil(data.length / itemPerPage)
    const newData = Array.from({length: pageNum}, (_, index) => {
        const start = index * itemPerPage;
        return data.slice(start, start + itemPerPage)
    })

    return newData;
}

export default paginate
