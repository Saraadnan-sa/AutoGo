import React from 'react'

const AddModal = () => {
  return (
    <>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">ADD VEHICLE</button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">ADD CAR</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Car Name:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Renter:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Availability Status:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Car Model:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Make:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Engine Capacity:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Mileage:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Region:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Rent/hr:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Driver:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Car Number:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Duration:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">With/Without Petrol:</label>
                  <input type="text" class="form-control" id="recipient-name"></input>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Apply Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddModal;