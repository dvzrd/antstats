export const arrayToObject = array =>
    array.reduce((object, member) => {
        object[member.id] = member
        return object
    }, {})

export const mutateObjects = (array, members) =>
    array.map((object) => {
        return Object.assign({ ...members }, object)
    })