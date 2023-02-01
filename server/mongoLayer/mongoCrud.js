
const MongoCRUD = {}

MongoCRUD.get = async (db, collection, queryString) => {

    return await db.collection(collection).findOne(queryString)
        .then(function (res) {
            if (!res) {
                return null
            }

            return res
        });
}

export default MongoCRUD;