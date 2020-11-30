// Stwórz funkcję paginateArray
// paginateArray(data,settings)

// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx, entriesOnPage }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowiednią ilością elementów z danej strony

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var maxElementsOnPage = 4;

const paginateArray = (dataEntries, settings) => {
    if (settings.elementsOnPage <= 0 || settings.actualPageIdx <= 0) {
        throw new Error('must be postive numbers');
    }

    const entriesOnSelectedPage = dataEntries.slice(
        (settings.actualPageIdx - 1) * maxElementsOnPage,
        (settings.actualPageIdx - 1) * (maxElementsOnPage + settings.elementsOnPage)
    );
    return entriesOnSelectedPage
}

var pageSettings = {
    elementsOnPage: 6,
    actualPageIdx: 2
}


console.log(paginateArray(data, pageSettings))






