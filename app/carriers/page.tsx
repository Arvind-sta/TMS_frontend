"use client";

import { useState } from "react";

const sampleCarriers = [
  { id: 1, name: "Swift Transport", mc: "123456", contact: "John Doe", phone: "555-1234", email: "swift@example.com" },
  { id: 2, name: "Knight Logistics", mc: "654321", contact: "Jane Smith", phone: "555-5678", email: "knight@example.com" },
  { id: 3, name: "Prime Inc.", mc: "789012", contact: "Mike Brown", phone: "555-9012", email: "prime@example.com" },
];

export default function CarriersPage() {
  const [carriers, setCarriers] = useState(sampleCarriers);

  return (
    <div className="max-w-5xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Carriers</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">MC #</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {carriers.map((carrier) => (
              <tr key={carrier.id}>
                <td className="px-4 py-2 whitespace-nowrap font-medium">{carrier.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{carrier.mc}</td>
                <td className="px-4 py-2 whitespace-nowrap">{carrier.contact}</td>
                <td className="px-4 py-2 whitespace-nowrap">{carrier.phone}</td>
                <td className="px-4 py-2 whitespace-nowrap">{carrier.email}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
