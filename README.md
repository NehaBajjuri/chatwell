# chatwell
# 🧠 Mental Health Chatbot

A conversational AI chatbot that provides support and guidance for mental wellness using **Natural Language Processing (NLP)** and the **Rasa** framework. Designed to offer a safe, empathetic, and helpful environment for users dealing with stress, anxiety, and emotional concerns.

---

## Features

- Natural language understanding with Rasa NLU
- Context-aware and empathetic conversations
- Custom fallback and restart mechanisms
- Custom action server for dynamic responses
- API support for frontend integration
- Easy local setup using Python virtual environments

---

## Project Structure

- chatbot/
- │
- ├── data/
- │ └── nlu.yml # Training data for NLU
- │
- ├── domain.yml # Defines intents, entities, slots, and responses
- ├── actions.py # Custom Python actions
- ├── config.yml # NLU pipeline and policy configuration
- ├── credentials.yml # Bot channel credentials
- ├── endpoints.yml # Action server endpoints
- ├── models/ # Stored trained models
- ├── tests/ # Test conversations
- └── README.md # Project documentation



---

## Setup & Run

### Prerequisites

- Python 3.10 or higher
- [Rasa](https://rasa.com/)
- Git (for version control)
- Node.js (optional, for frontend integration)

### Environment Setup

```bash
# Remove old virtual environment if it exists
rmdir /s /q .venv

# Create and activate new virtual environment
python -m venv .venv
.\.venv\Scripts\activate

# Upgrade pip and install Rasa
pip install --upgrade pip
pip install rasa

# Move to chatbot directory
cd chatbot
```
### Train the Model
```bash
rasa train
```
### Run the Backend
```bash
#This starts the Rasa server with API and CORS enabled for frontend integration.
rasa run --enable-api --cors "*" --debug
```
### Test in Command Line
```bash
rasa shell
```
### 🤝 Contribution

Feel free to contribute! Here's how:

1. Fork the repository  
2. Create a new branch  
   ```bash
   git checkout -b feature-name
3. Make your changes and commit

```bash
git commit -m "Your descriptive message"
```
4. Push your changes to GitHub
```bash
git push origin feature-name
```
5. Open a Pull Request on the main repository


---

## 📸 Screenshots

Below are some screenshots of the chatbot in action:

### Chatbot Interface

![Chatbot Interface]
![image](https://github.com/user-attachments/assets/50577fd8-7179-4c35-84bc-b405d4ca8b6c)


*Example of a conversation with the mental health chatbot.*

![image](https://github.com/user-attachments/assets/1da636a9-a3f4-4d47-b62b-a32d1883c764)


---

