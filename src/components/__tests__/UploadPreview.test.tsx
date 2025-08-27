import { render, screen, fireEvent } from "@testing-library/react";
import UploadPreview from "../UploadPreview";

describe("UploadPreview Component", () => {
  let mockSetImageDataUrl: jest.Mock;

  beforeEach(() => {
    mockSetImageDataUrl = jest.fn();
  });

  it("renders the upload placeholder when no image is provided", () => {
    render(
      <UploadPreview image={null} setImageDataUrl={mockSetImageDataUrl} />
    );

    expect(
      screen.getByText(/Click or drag image to upload/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/PNG or JPG up to 5MB/i)).toBeInTheDocument();
    expect(screen.getByRole("img", { hidden: true })).not.toBeInTheDocument();
  });

  it("renders the uploaded image when image is provided", () => {
    render(
      <UploadPreview
        image="data:image/png;base64,somefakebase64"
        setImageDataUrl={mockSetImageDataUrl}
      />
    );

    const uploadedImage = screen.getByAltText("Uploaded preview");
    expect(uploadedImage).toBeInTheDocument();
  });

  it("calls setImageDataUrl(null) when remove button is clicked", () => {
    render(
      <UploadPreview
        image="data:image/png;base64,somefakebase64"
        setImageDataUrl={mockSetImageDataUrl}
      />
    );

    const removeButton = screen.getByRole("button", { name: /Remove image/i });
    fireEvent.click(removeButton);

    expect(mockSetImageDataUrl).toHaveBeenCalledWith(null);
  });

  it("calls setImageDataUrl when file is selected", () => {
    render(
      <UploadPreview image={null} setImageDataUrl={mockSetImageDataUrl} />
    );

    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    const input = screen.getByLabelText(/upload an image/i, {
      selector: "input",
    });

    fireEvent.change(input, { target: { files: [file] } });

    setTimeout(() => {
      expect(mockSetImageDataUrl).toHaveBeenCalled();
    }, 100);
  });

  it("changes border color when dragging over", () => {
    render(
      <UploadPreview image={null} setImageDataUrl={mockSetImageDataUrl} />
    );

    const dropZone = screen.getByText(/Click or drag image to upload/i)
      .parentElement!;
    fireEvent.dragOver(dropZone);
    expect(dropZone).toHaveClass("border-indigo-500");
    fireEvent.dragLeave(dropZone);
    expect(dropZone).toHaveClass("border-gray-300");
  });
});
