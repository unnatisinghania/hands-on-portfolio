import os

def generate_image_descriptions_from_directory(directory, description):
    try:
        files = os.listdir(directory)
        output = []
        
        for file in files:
            if file.endswith(".png") or file.endswith(".jpg") or file.endswith(".jpeg") or file.endswith(".gif"):
                entry = {
                    "imgSrc": f"/images/drive/{file}",
                    "description": description
                }
                output.append(entry)
        
        # Print the formatted output
        formatted_output = ",\n".join(
            [
                f"{{\n        imgSrc: \"{entry['imgSrc']}\",\n        description: \"{entry['description']}\"\n      }}" 
                for entry in output
            ]
        )

        print(formatted_output)

    except Exception as e:
        print(f"An error occurred: {e}")

# Specify the directory and description here
directory_path = "/Users/akshat/Downloads/porfolio-hands-on-project-portfolio-html/website/portfolio/public/images/drive"
description_text = "Won tie rajasthan2024"

# Generate output
generate_image_descriptions_from_directory(directory_path, description_text)
