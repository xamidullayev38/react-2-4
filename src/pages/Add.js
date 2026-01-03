import { useState } from "react";
import styled from "styled-components";

const Page = styled.div`padding: 24px 32px;`;
const Title = styled.h2`margin: 0; font-size: 22px;`;
const Subtitle = styled.p`margin: 4px 0 24px; color: #8b8b8b;`;
const Tabs = styled.div`display: flex; gap: 16px; margin-bottom: 24px;`;
const TabButton = styled.button`
  padding: 8px 20px; border-radius: 8px; border: none; cursor: pointer; font-weight: 500;
  background: ${({ active }) => (active ? "#ffeb00" : "transparent")};
  box-shadow: ${({ active }) => (active ? "0 4px 8px rgba(0,0,0,0.1)" : "none")};
`;
const Form = styled.div`max-width: 700px; display: flex; flex-direction: column; gap: 16px;`;
const Row = styled.div`display: flex; gap: 16px;`;
const Input = styled.input`padding: 12px 14px; border-radius: 8px; border: 1px solid #e0e0e0; width: 100%;`;
const Textarea = styled.textarea`padding: 12px 14px; border-radius: 8px; border: 1px solid #e0e0e0; resize: none; min-height: 120px;`;
const Select = styled.select`padding: 12px 14px; border-radius: 8px; border: 1px solid #e0e0e0; width: 100%;`;
const SubmitButton = styled.button`
  margin-top: 24px; align-self: center; padding: 12px 40px; border-radius: 10px; border: none;
  cursor: pointer; background: #ffeb00; font-weight: 600; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

const ListContainer = styled.div`margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;`;
const FoodCard = styled.div`
  background: #f9f9f9; padding: 16px; border-radius: 12px; margin-bottom: 12px;
  display: flex; justify-content: space-between; align-items: center;
`;

function Add() {
  const [activeTab, setActiveTab] = useState("category"); 
  
  const [categories, setCategories] = useState([]); 
  const [foods, setFoods] = useState([]);

  const [catInput, setCatInput] = useState("");
  const [foodData, setFoodData] = useState({ name: "", img: "", desc: "", price: "", category: "" });

  const handleAddCategory = () => {
    const trimmedInput = catInput.trim();

    if (!trimmedInput) {
      alert("Iltimos, kategoriya nomini kiriting!");
      return;
    }

    const isExist = categories.some(
      (cat) => cat.toLowerCase() === trimmedInput.toLowerCase()
    );

    if (isExist) {
      alert("Bu kategoriya allaqachon mavjud!");
      return;
    }

    setCategories([...categories, trimmedInput]);
    setCatInput("");
    alert("Kategoriya muvaffaqiyatli qo'shildi!");
  };

  const handleAddFood = () => {
    const { name, price, category } = foodData;

    if (!name || !price || !category) {
      alert("Iltimos, barcha majburiy maydonlarni to'ldiring (Nomi, Narxi va Kategoriya)!");
      return;
    }

    setFoods([...foods, foodData]);
    setFoodData({ name: "", img: "", desc: "", price: "", category: "" });
    alert("Taom ro'yxatga qo'shildi!");
  };

  return (
    <Page>
      <Title>Qo‘shish</Title>
      <Subtitle>Yangi kategoriya yoki taom kiriting</Subtitle>

      <Tabs>
        <TabButton active={activeTab === "category"} onClick={() => setActiveTab("category")}>Kategoriya</TabButton>
        <TabButton active={activeTab === "food"} onClick={() => setActiveTab("food")}>Taom</TabButton>
      </Tabs>

      {activeTab === "category" && (
        <Form>
          <Input 
            placeholder="Kategoriya nomi " 
            value={catInput}
            onChange={(e) => setCatInput(e.target.value)}
          />
          <SubmitButton onClick={handleAddCategory}>Kategoriyani saqlash</SubmitButton>
        </Form>
      )}

      {activeTab === "food" && (
        <>
          <Form>
            <Row>
              <Input 
                placeholder="Rasm URL manzili" 
                value={foodData.img}
                onChange={(e) => setFoodData({...foodData, img: e.target.value})}
              />
              <Input 
                placeholder="Taom nomi" 
                value={foodData.name}
                onChange={(e) => setFoodData({...foodData, name: e.target.value})}
              />
            </Row>

            <Textarea 
              placeholder="Taom haqida qisqacha ma'lumot..." 
              value={foodData.desc}
              onChange={(e) => setFoodData({...foodData, desc: e.target.value})}
            />

            <Row>
              <Input 
                type="number"
                placeholder="Narxi" 
                value={foodData.price}
                onChange={(e) => setFoodData({...foodData, price: e.target.value})}
              />
              <Select 
                value={foodData.category}
                onChange={(e) => setFoodData({...foodData, category: e.target.value})}
              >
                <option value="">Kategoriya tanlang</option>
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </Select>
            </Row>

            <SubmitButton onClick={handleAddFood}>Taomni qo‘shish</SubmitButton>
          </Form>

          <ListContainer>
            <h3>Qo'shilgan taomlar ro'yxati:</h3>
            {foods.length === 0 ? (
              <p style={{color: "#999"}}>Hozircha hech qanday taom qo'shilmagan.</p>
            ) : (
              foods.map((food, index) => (
                <FoodCard key={index}>
                  <div>
                    <strong>{food.name}</strong> 
                    <span style={{fontSize: "12px", background: "#eee", padding: "2px 6px", borderRadius: "4px", marginLeft: "8px"}}>
                      {food.category}
                    </span>
                    <p style={{margin: "4px 0, 0", fontSize: "13px", color: "#666"}}>{food.desc}</p>
                  </div>
                  <div style={{fontWeight: "bold", color: "#27ae60"}}>{Number(food.price).toLocaleString()} so'm</div>
                </FoodCard>
              ))
            )}
          </ListContainer>
        </>
      )}
    </Page>
  );
}

export default Add;