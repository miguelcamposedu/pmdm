$(document).ready(function () {
  // Hide all buttons to add row below/above
  $(".btn-add-row-above").hide();
  $(".btn-add-row-below").hide();

  // Click to delete row
  $(document).on("click", ".btn-delete-row", function () {
    $(this).closest("tr").remove();
    // También sería válido: $(this).parent().parent().remove();
  });

  // Add row to table
  $(document).on("click", "#btn-add-row", function () {
    $("#table-tbody").append(
      `<tr>
                <th scope="row">1</th>
                <td>Miguel</td>
                <td>Campos</td>
                <td>@mdo</td>
                <td>
                  <button class="btn btn-danger btn-xs btn-delete-row">
                    <i class="bi bi-trash"></i> Delete row
                  </button>
                  <button class="btn btn-success btn-xs btn-add-row-above" style="display:none;">
                    <i class="bi bi-arrow-bar-up"></i>
                    Add row above
                  </button>
                  <button class="btn btn-success btn-xs btn-add-row-below" style="display:none;">
                    <i class="bi bi-arrow-bar-down"></i>
                    Add row below
                  </button>
                </td>
              </tr>`
    );
  });

  $(document).on("mouseover", "tr", function () {
    $(".btn-add-row-above").hide();
    $(".btn-add-row-below").hide();

    $(this).find(".btn-add-row-above").show();
    $(this).find(".btn-add-row-below").show();
  });

  $(document).on("mouseleave", "tr", function () {
    $(".btn-add-row-above").hide();
    $(".btn-add-row-below").hide();
  });
});
