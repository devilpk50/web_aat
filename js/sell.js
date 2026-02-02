function triggerUpload() {
  document.getElementById("imageUpload").click();
}

// Optional preview logic (can be expanded later)
document.getElementById("imageUpload").addEventListener("change", function () {
  if (this.files.length > 0) {
    alert("Image selected: " + this.files[0].name);
  }
});

// Form submit (frontend only for now)
document.getElementById("sellForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Item listed (frontend demo)");
});

function triggerUpload() {
  document.getElementById("imageUpload").click();
}

/* Image Preview */
document.getElementById("imageUpload").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("previewImg").src = reader.result;
      document.getElementById("previewImg").classList.remove("d-none");
      document.getElementById("uploadText").style.display = "none";
    };
    reader.readAsDataURL(file);
  }
});

/* Bootstrap Validation */
document.getElementById("sellForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const conditionChecked = document.querySelector('input[name="condition"]:checked');

  if (!conditionChecked) {
    document.getElementById("conditionError").style.display = "block";
  } else {
    document.getElementById("conditionError").style.display = "none";
  }

  if (!form.checkValidity() || !conditionChecked) {
    form.classList.add("was-validated");
    return;
  }

  alert("✅ Item listed successfully (frontend demo)");
});

